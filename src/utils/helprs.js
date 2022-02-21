function formatSpecs(specs) {
  return specs.includes(',') ? specs.split(',').map((val) => parseInt(val)) :
                               parseInt(specs);
}

export function formattingReceivedProduct(rawproducts) {
  let products = {};

  rawproducts.map((product) => {
    const {id, sku, name, price, type, specs} = {...product};

    let specsformated = formatSpecs(specs);
    if (specsformated !== 'number') {
      products[id] = {
        id,
        sku,
        name,
        price,
        type,
        typeSpecs: typeof specsformated !== 'number' ?
            {H: specsformated[0], W: specsformated[1], L: specsformated[2]} :
            specsformated
      };
    }
  });

  return products;
}

export function formatNewProduct(product) {
  const {id, sku, name, price, type, specs} = {...product};

  let specsformated = formatSpecs(specs);

  return {
    id,sku,name,price,type,typeSpecs:typeof specsformated !== 'number' ?
    {H: specsformated[0], W: specsformated[1], L: specsformated[2]} :
    specsformated
  }

}

