function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (item) {
      result.push(callback(item));
    });
    return result;
  }
  

  function myReduce(collection, callback, acc) {
    let result = acc;

    if (acc === undefined) {
        if (Array.isArray(collection)) {
            result = collection[0];
            collection = collection.slice(1);
        } else {
            const firstKey = Object.keys(collection)[0];
            result = collection[firstKey];
            collection = Object.assign({}, collection);
            delete collection[firstKey];
        }
    }

    myEach(collection, function (item) {
        result = callback(result, item, collection);
    });

    return result;
}



  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (item) {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  

  function myFirst(collection, n) {
    return n ? (Array.isArray(collection) ? collection.slice(0, n) : collection[Object.keys(collection)[0]]) : collection[0];
}


  function myLast(collection, n) {
    if (!n) {
        return collection[collection.length - 1];
    } else {
        return collection.slice(-n);
    }
}

  
  function mySortBy(collection, callback) {
    return collection.slice().sort(function (a, b) {
      return callback(a) - callback(b);
    });
  }
  
  function myFlatten(collection, shallow = false) {
    const result = [];
    function flatten(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && !shallow) {
          flatten(arr[i]);
        } else {
          result.push(arr[i]);
        }
      }
    }
    flatten(collection);
    return result;
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  