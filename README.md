# 🏆 TCS - Your Decentralized Achievement Hub on TON

![TON](https://img.shields.io/badge/TON-%2300A9E0?style=for-the-badge&logo=ton&logoColor=white)![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)![TON Connect](https://img.shields.io/badge/TON_Connect-0088CC?style=for-the-badge&logo=telegram&logoColor=white)![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

![TCS Banner](frontend/public/icon.png)

**TON CERTIFICATE SYSTEM** is a decentralized application (dApp) built on **The Open Network (TON)**, designed to securely store, manage, and verify achievements such as certificates, diplomas, and awards. With blockchain-powered immutability and Telegram Mini Apps integration, your accomplishments are always accessible and tamper-proof.

🔗 **Live Demo**: [Available in Telegram Mini Apps](https://t.me/ton_cert_system_bot) (Coming Soon)

## 🌟 Features

✅ **Secure Storage** – All achievements are stored on the TON blockchain, ensuring transparency and immutability.  
✅ **Public Profiles** – Showcase your accomplishments with a shareable profile link.  
✅ **Organization Portal** – Schools, bootcamps, and companies can issue verifiable certificates.  
✅ **Telegram Mini App** – Access your achievements directly in Telegram.  
✅ **Decentralized Verification** – Anyone can instantly verify the authenticity of a certificate.

## 📸 Screenshots

| Profile Preview                                                                                      | Certificate                                                                                         |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------|
| ![Profile Preview](https://github.com/user-attachments/assets/8686ffae-e07f-4cec-9c83-2ab0aeaa6abd)  | ![Certificate](https://github.com/user-attachments/assets/af35377d-ffed-43e9-88bc-66321c3085ff)

| Certificate Issuance                                                                                 | My Organization                                                                                     |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------|
| ![Issuance Preview](https://github.com/user-attachments/assets/a21481d0-5585-4d7f-945f-47054c407014) | ![My Organization](https://github.com/user-attachments/assets/71751538-98ec-487d-adbd-905e9fc240f0) |
## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.x
- TON Wallet (e.g., Tonkeeper)
- Telegram (for Mini Apps testing)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/toqsukr/ton-certificate-system.git
   ```
2. Install dependencies:
   ```sh
   cd ton-certificate-system && npm install
   ```
3. Update .env file.
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Access via Telegram Mini Apps or web browser.

## 📜 Smart Contracts

Achievement records are anchored on TON via:

- **CertificateNFT** – Stores user certificate as NFT.
- **ManagerNFT** – Used to certificate management delegation
- **OrganizationFactory** – Organization contract-factory.
- **Organization** – Manages trusted issuers.

## 🤝 Contributing

We welcome contributions! Open an issue or submit a PR.

## 📄 License

**MIT** – Free for open use.

---

💡 **Powered by TON Blockchain**
