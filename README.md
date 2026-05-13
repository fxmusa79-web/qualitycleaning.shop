# Quality Cleaning — qualitycleaning.shop

Next.js 16 website met lead-formulier, admin-dashboard en Resend e-mail voor Quality Cleaning.

---

## Tech-stack

| Laag | Keuze |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Taal | TypeScript |
| Styling | Pure CSS (globals.css, geen Tailwind in gebruik) |
| E-mail | Resend (`resend` npm-pakket) |
| Data | Platte bestanden: `data/leads.jsonl`, `data/analytics.jsonl` |
| Procesmanager | PM2 (productie) |
| Webserver | Nginx (reverse proxy) |

---

## Lokale ontwikkeling

```bash
git clone https://github.com/fxmusa79-web/qualitycleaning.shop.git
cd qualitycleaning.shop
npm install
cp .env.example .env.local   # vul env-variabelen in
npm run dev                  # start op http://localhost:3002
```

---

## Omgevingsvariabelen

Maak `.env.local` aan in de projectroot (staat in `.gitignore` — nooit committen):

```env
# Publiek domein
NEXT_PUBLIC_SITE_URL=https://qualitycleaning.shop

# Resend (domein geverifieerd op qualitycleaning.shop)
RESEND_API_KEY=re_NuGg4DyZ_LQeR2dyjx3gEoCzDJdcRFXkf
RESEND_FROM_EMAIL=noreply@qualitycleaning.shop
CONTACT_TO_EMAIL=info@qualitycleaning.shop

# Admin /scotdejews — VERANDER DIT vóór live!
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin
ADMIN_SESSION_SECRET=vervang-dit-met-een-lang-random-geheim
```

> **Belangrijk op de VPS:** wijzig `ADMIN_USERNAME`, `ADMIN_PASSWORD` en `ADMIN_SESSION_SECRET` direct naar sterke waarden.

---

## VPS Deployment (Ubuntu 22.04 / Debian 12)

### 1 — Node.js installeren via nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
nvm alias default 20
```

### 2 — PM2 installeren

```bash
npm install -g pm2
```

### 3 — Repository clonen

```bash
cd /var/www
git clone https://github.com/fxmusa79-web/qualitycleaning.shop.git
cd qualitycleaning.shop
npm install
```

### 4 — Omgevingsvariabelen instellen

```bash
cp .env.example .env.local
nano .env.local   # vul echte waarden in
```

### 5 — Bouwen & starten

```bash
npm run build
pm2 start npm --name "quality-cleaning" -- start
pm2 save
pm2 startup   # volg de instructies die PM2 toont
```

De app draait nu op **poort 3002**.

### 6 — Nginx als reverse proxy

```nginx
server {
    listen 80;
    server_name qualitycleaning.shop www.qualitycleaning.shop;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/qualitycleaning.shop /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7 — SSL met Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d qualitycleaning.shop -d www.qualitycleaning.shop
```

### 8 — Data-map aanmaken

```bash
mkdir -p /var/www/qualitycleaning.shop/data
```

De bestanden `leads.jsonl` en `analytics.jsonl` worden automatisch aangemaakt zodra een formulier wordt ingestuurd.

---

## Updates deployen

```bash
cd /var/www/qualitycleaning.shop
git pull origin main
npm install
npm run build
pm2 restart quality-cleaning
```

---

## Admin-panel

URL: `https://qualitycleaning.shop/scotdejews`

| Tab | Functie |
|---|---|
| Overzicht | Statistieken: totaal leads, bezoeken vandaag |
| Leads | Zoeken, filteren, details, verwijderen, CSV-export, direct mailen |
| Live traffic | Paginabezoeken — auto-refresh elke 12 sec |
| Mailer | E-mail versturen via Resend naar leads of elk adres |

> **Veiligheid:** Wijzig het standaardwachtwoord `admin/admin` direct via `.env.local` op de VPS. De `/scotdejews`-route is uitgesloten van `robots.txt`.

---

## Resend instelling

1. Domein `qualitycleaning.shop` is al geverifieerd in Resend.
2. Stel `RESEND_FROM_EMAIL=noreply@qualitycleaning.shop` in.
3. Stel `CONTACT_TO_EMAIL` in op het adres waar nieuwe leads naartoe moeten.

---

## Projectstructuur

```
src/
├── app/
│   ├── (marketing)/        # Publieke pagina's (met nav + footer)
│   │   ├── page.tsx        # Homepage
│   │   ├── gevelreiniging/
│   │   ├── glazenwassen/
│   │   ├── zonnepanelen-reinigen/
│   │   ├── autoreiniging/
│   │   ├── diensten/
│   │   ├── werkwijze/
│   │   ├── prijzen/
│   │   ├── over-ons/
│   │   ├── contact/
│   │   ├── privacy/
│   │   └── voorwaarden/
│   ├── scotdejews/         # Admin-panel (geen nav/footer)
│   ├── api/
│   │   ├── contact/        # Leadformulier → opslaan + mail
│   │   ├── track/          # Analytics pageview tracking
│   │   └── admin/
│   │       ├── login/
│   │       ├── logout/
│   │       ├── leads/
│   │       ├── analytics/
│   │       └── send-email/
│   ├── layout.tsx          # Root layout (HTML shell + fonts)
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── HeroSection.tsx
│   ├── HeroBackdrop.tsx    # Client component: video backdrop
│   ├── SiteNav.tsx
│   ├── SiteFooter.tsx
│   ├── SiteAnalytics.tsx   # Client component: pageview tracker
│   ├── LeadForm.tsx
│   ├── PlaceholderPage.tsx
│   └── admin/
│       └── AdminPortal.tsx
├── lib/
│   ├── leads.ts            # JSONL lezen/schrijven
│   ├── analytics.ts        # Pageviews lezen/schrijven
│   └── admin-session.ts    # HMAC sessie-token
data/                       # Gegenereerd op server (gitignored)
├── leads.jsonl
└── analytics.jsonl
public/
└── hero/
    └── hero.mp4            # Hero-achtergrondvideo
```

---

## Volgende stappen (voor de VPS-agent)

- [ ] `.env.local` aanmaken met echte variabelen (zie sectie hierboven)
- [ ] `ADMIN_PASSWORD` en `ADMIN_SESSION_SECRET` wijzigen naar sterke waarden
- [ ] Controleer dat `data/` map schrijfbaar is door het Node-proces
- [ ] Nginx configureren en SSL activeren met Certbot
- [ ] PM2 startup-hook instellen zodat de app herstart na reboot
- [ ] Optioneel: dagelijkse backup van `data/` via cronjob

```bash
# Voorbeeld backup cron (elke dag 03:00)
0 3 * * * tar -czf /root/backups/qc-data-$(date +\%F).tar.gz /var/www/qualitycleaning.shop/data/
```
