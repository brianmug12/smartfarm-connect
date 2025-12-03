smartfarm-connect/
├── api/                  # NestJS backend
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── ussd/
│   │   │   └── ussd.controller.ts
│   │   └── prisma.service.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   └── package.json
├── web/                  # Next.js frontend
│   ├── pages/
│   │   ├── index.tsx
│   │   └── suppliers.tsx
│   ├── components/
│   │   └── Navbar.tsx
│   └── package.json
├── docker-compose.yml    # Local dev setup
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline
├── .env.example          # Environment variables template
├── README.md             # Documentation
└── LICENSE               # MIT license
