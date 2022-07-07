function factory(library, orders) {

    const result = [];
  
    for (const order of orders) {
  
      const object = {};
      const template = order.template;
  
      for (const prop in template) {
        object[prop] = template[prop];
      }
  
      const parts = order.parts;
  
      for (const part of parts) {
        object[part] = library[part];
      }
  
      result.push(object);
    }
  
    return result;
    // [   // result array 
    //   {                                object 
    //     name: 'ACME Printer',
    //     print: [Function: print]
    //   },
  
    //   {
    //     name: 'Initech Scanner',
    //     scan: [Function: scan]
    //   },
  
    //   {
    //     name: 'ComTron Copier',
    //     scan: [Function: scan],
    //     print: [Function: print]
    //   },
  
    //   {
    //     name: 'BoomBox Stereo',
    //     play: [Function: play]
    //   }
  
    // ]
  }