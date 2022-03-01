import {BOOK, DVD, Furniture} from './available_products'

function formatSpecs(specs) {
  return specs.includes(',') ? specs.split(',').map((val) => parseInt(val)) :
                               parseInt(specs);
}

export function formattingReceivedProduct(rawproducts) {
  let products = {};

  if (rawproducts === undefined) {
    return {}
  }
  rawproducts.forEach((product) => {
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

export function prepare_product(product) {
  const {sku, name, price, type, length, width, height, weight, size} = product;

  let specs = ''
  switch (type) {
    case Furniture:
      specs = `${height},${width},${length}`;
      break;
    case DVD:
      specs = `${size}`;
      break;
    case BOOK:
      specs = `${weight}`;
      break;
    default:
      break;
  }
  return {
    sku, name, price, type, specs
  }
}