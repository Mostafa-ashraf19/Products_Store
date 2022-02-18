let products = {
  'JVC200456': {
    sku: 'JVC200456',
    name: 'Acme DISC',
    price: 20,
    type: 'DVD',
    typeSpecs: 10,
  },
  'JVC200123': {
    sku: 'JVC200123',
    name: 'Acme DISC',
    price: 20,
    type: 'DVD',
    typeSpecs: 10,
  },
  'JVC200789': {
    sku: 'JVC200789',
    name: 'World War I',
    price: 20,
    type: 'BOOK',
    typeSpecs: 10,
  },
  'JVC200987': {
    sku: 'JVC200987',
    name: 'World War II',
    price: 20,
    type: 'BOOK',
    typeSpecs: 10,
  },
  'JVC200654': {
    sku: 'JVC200654',
    name: 'Couch',
    price: 200,
    type: 'Furniture',
    typeSpecs: {
      H: 150,
      W: 70,
      L: 45,
    },
  },
  'JVC200321': {
    sku: 'JVC200321',
    name: 'Bed',
    price: 120,
    type: 'Furniture',
    typeSpecs: {
      H: 150,
      W: 70,
      L: 45,
    },
  },
  'JVC200322': {
    sku: 'JVC200322',
    name: 'Bed',
    price: 120,
    type: 'Furniture',
    typeSpecs: {
      H: 150,
      W: 70,
      L: 45,
    },
  },
  'JVC200323': {
    sku: 'JVC200323',
    name: 'Bed',
    price: 120,
    type: 'Furniture',
    typeSpecs: {
      H: 150,
      W: 70,
      L: 45,
    },
  },
  'JVC200324': {
    sku: 'JVC200324',
    name: 'Bed',
    price: 120,
    type: 'Furniture',
    typeSpecs: {
      H: 150,
      W: 70,
      L: 45,
    },
  },
};

export function _getdbProducts() {
  return new Promise(
      (res, rej) => {setTimeout(() => res({...products}), 1000)});
}

export function getInitialProducts() {
  return Promise
      .all([
        _getdbProducts(),
      ])
      .then(([products]) => ({
              products,
            }));
}


export function RemoveProduct(sku) {
  return new Promise((res, rej) => {setTimeout(() => res(), 1000)});
}


function formatProduct(product) {

  switch (product.type) {
    case 'DVD':
      return {
        sku: product.sku,
        name: product.name,
        price: product.price,
        type: product.type,
        typeSpecs: product.size
      };
    case 'BOOK':
      return {
        sku: product.sku,
        name: product.name,
        price: product.price,
        type: product.type,
        typeSpecs: product.weight
      };
    case 'Furniture':
      return {
        sku: product.sku,
        name: product.name,
        price: product.price,
        type: product.type,
        typeSpecs: {H: product.height, L: product.length, W: product.width}
      };
    default:
      return {

      };
  }
}

export function _saveProduct(product) {
    return new Promise((res, rej) => {

      const formattedProduct = formatProduct(product)

      setTimeout(() => {
        products = {
          ...products,
          [formattedProduct.sku]: formattedProduct,
        }

        res(formattedProduct)
      }, 5000)
    })
}
