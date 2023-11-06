## Summary

Introducing a straightforward yet comprehensive Dapp that encompasses all the essential elements of a modern Web3 application. While it may not be the most thrilling project, it places a strong emphasis on critical aspects such as type safety, code cleanliness, modularity, and correctness.

The choice of Next.js 14 as the frontend library was intentional, as it offers both an engaging user interface and the flexibility to handle backend functionality, including REST routes and server components/actions. The project leverages Solidity and Hardhat to create and deploy a smart contract onto the Subspace network.

To ensure robust type definitions and ABIs for the smart contract, Typechain is employed, facilitating seamless integration with Ether.js. I used the Ethers.js framework to enable interaction with the smart contract and seamless connection to the user's MetaMask, enhancing the overall user experience.


## Getting Started

#### Running Locally:
> Next 14 requires node ^18.17

compile type-chain types to avoid type errors:
```bash
cd smart-contract
npm install
npx hardhat clean
npx hardhat compile
```

Run:
```bash
cd ..
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

You are now up and running locally! If you wish to modify and deploy your own smart contract, here is the code below to get you started with deployment.

### Smart Contract Deployment:

```bash
cd smart-contract
npm install
npx hardhat clean
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.ts --network subspace
```

And there you have it, you just deployed the smart contract!

#### Verification

For verification, I recommend going into your smart contract's artifacts --> build-info folder and copy the "input" object. This will be your solidiy.json verification certificate.

You can also run

```bash
npx hardhat flatten contracts/Counter.sol > Flattened.sol
```

This will create a flattened version of your solidity code, copy the generated file and you can also verify your contract with this method.


## Projects Original Vision

While I am pleased with the project's outcome, the initial vision was considerably more ambitious. My original goal was to develop a system akin to Uniswap, capable of accepting Subspace Tokens and converting them into the ERC20 token I crafted during the project's development. Despite my confidence in being able to implement this functionality given more time, I made the deliberate choice to prioritize code organization and type safety.

My journey through various projects involving large codebases has instilled in me a deep appreciation for structured, statically typed code. Through these experiences, I have come to understand the paramount importance of code quality over quantity. This project, in particular, has served as an invaluable stepping stone in my Web3 journey, allowing me to apply and solidify the knowledge I gained from my previous encounters with extensive codebases.

## Key Project Points

- As I have stated several times, type safety was a priority. I have worked with all of these tools in the past, however, I never understood how to work with them with Typescript. I wanted to make sure I fully understood how to create elegant smart contract code while also being 100% type-safe on the client. This led me to use Typechain a library I have never used before. It was really nice how it was able to generate all the ABI typings as well as the smart contracts type. Also, I am very familiar with typescript and react, so there was no issue adding type safety to my components and functions.
- Documented Code. With all of my recent projects, I have made sure to document important functions, making it easy to understand and make updates.
- Although very strange for a personal project, I make sure to emulate working for a team by making branches, doing pull requests, and even commenting on the pull requests with appropriate names and descriptions. You can view both pull requests (here)[https://github.com/SethY8s/subspace-project/pull/1] and (here)[https://github.com/SethY8s/subspace-project/pull/3]

## Final Words

Thank you Subspace for offering me this project! Although I couldn't incorporate every idea I had in mind, I take great satisfaction in the quality of the code, which closely aligns with my developer philosophy.

This project has served as an invaluable learning experience, allowing me to acquire a wealth of knowledge. Given the opportunity for a fresh start, I am confident that I could develop a more sophisticated contract and application.

Once again, thank you very much, and I eagerly anticipate what the future holds.

-Seth Yates

## Deploy on Vercel

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
