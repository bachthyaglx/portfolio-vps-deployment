## About
This is a portfolio web application, built by using web technologies such as Next.js 13 App Router, Tailwind-CSS, GraphQL (Apollo Client/Server), Prisma ORM, PostgreSQL, AWS S3, Redis cache, and AWS EC2 free tier deployment.

## Web Architecture
https://medium.com/@rahamatelahi2/implementing-redis-caching-in-a-full-stack-web-application-4f3291e3a0e8

![image](https://github.com/user-attachments/assets/e45c444b-6a70-412d-875b-d9f6ebe28532)

# Deployment steps

## Create EC2 instance

- OS: **Ubuntu 22.04 LTS** (or 24.04 LTS)
- Instance type: t2.micro / t3.small / t3.medium (2+ RAM)
- Key Pair: create new `.pem` → download
- Security Group Inbound:
  - 22 → SSH
  - 80 → HTTP
  - ... → HTTPS

## SSH into EC2

```bash
chmod 400 vps-deployment.pem

ssh -i vps-deployment.pem ubuntu@<your-ec2-public-dns>
```

## Setup Ubuntu server

```bash
# Update system:
sudo apt update && sudo apt upgrade -y

# Install Node.js 20:
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2:
sudo npm install -g pm2

# Install Git:
sudo apt install git -y
```

## Prepare project folder on EC2

```bash
ssh -i vps-deployment.pem ubuntu@<your-ec2-public-dns>

cd ~
git clone git@github.com:<your-github-user>/<your-repo>.git portfolio-vps-deployment
cd portfolio-vps-deployment
```

## Setup GitHub Actions — Secrets

```bash
GitHub → your repo → Settings → Secrets and variables → Actions → Repository secrets
```

##  Setup GitHub Actions pipeline

Add .github/workflows/deploy.yml

## First deploy → clean VPS

```bash
ssh -i vps-deployment.pem ubuntu@<your-ec2-public-dns>

cd ~/portfolio-vps-deployment

# Clean everything except .git:
find . -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +

# Back to local → push first commit:
git add .
git commit -m "First deploy"
git push origin main
```

## Deploy new versions

```bash
git push origin main
```

## Test your app

Nginx → http://<your-ec2-public-dns>

Or raw ports:

```bash
http://<your-ec2-public-dns>:3000 → Frontend
http://<your-ec2-public-dns>:4000 → Backend API
```

## PM2 useful commands (on EC2)

```bash
# View processes:
pm2 list

# View logs:
pm2 logs frontend
pm2 logs backend

# Restart services:
pm2 restart frontend
pm2 restart backend

# Stop services:
pm2 stop frontend
pm2 stop backend
```