# Get SOL NFT Collection Traits

## 0. Setup

### Get the Candy Machine address

Get the token address from one of the NFTs in the collection. 

Go to `https://solscan.io/token/<TOKEN_ADDRESS>`

Under "Creators", find the "Creator Address" with the "% Royalty" set to 0%

### Get the token hash list

Go here: https://magiceden.io/mintlist-tool

Plug in the Candy Machine address from the step above and then click "Get Hash List"

Save that data array in a file at the root of the repository as `data.json`