
const baseUrl = 'agriculturists';

module.exports = () => ({
  navigatorInit: () => {
    return {
      "_links": {
        "self": { 
          "href": `/`,
          "method": "GET"
        },
        "reports": { 
          "href": `/${baseUrl}/reports`,
          "method": "GET"
        },
        "create": { 
          "href": `/${baseUrl}`,
          "method": "POST",
          "bodyExample": {
            "cnpj": "10714091000139",
            "producerName": "Jose Oliveira",
            "farmName": "Fazenda Azul",
            "city": "João Pessoa",
            "state": "PB",
            "totalArea": 2000,
            "arableArea": 1500,
            "vegetationArea": 300,
            "plantedCrops": ["Cotton", "Sugarcane", "Coffee"]
          }
        },
        "update": { 
          "href": `/${baseUrl}/{id}`,
          "method": "PUT",
          "bodyExample": {
            "cnpj": "10714091000139",
            "producerName": "Jose Oliveira",
            "farmName": "Fazenda Azul",
            "city": "João Pessoa",
            "state": "PB",
            "totalArea": 2000,
            "arableArea": 1500,
            "vegetationArea": 300,
            "plantedCrops": ["Cotton", "Sugarcane", "Coffee"]
          }
        },
        "delete": { 
          "href": `/${baseUrl}/{id}`,
          "method": "DELETE"
        }
      }
    }    
  },
  
  navigatorCreate: (data) => {
    return {
      ...data,
      "_links": {
        "self": { 
          "href": `/${baseUrl}`,
          "method": "POST",
        },        
        
        "update": { 
          "href": `/${baseUrl}/${data.id}`,
          "method": "PUT",
          "bodyExample": {
            "cnpj": "10714091000139",
            "producerName": "Jose Oliveira",
            "farmName": "Fazenda Azul",
            "city": "João Pessoa",
            "state": "PB",
            "totalArea": 2000,
            "arableArea": 1500,
            "vegetationArea": 300,
            "plantedCrops": ["Cotton", "Sugarcane", "Coffee"]
          }
        },

        "delete": { 
          "href": `/${baseUrl}/${data.id}`,
          "method": "DELETE"
        },

        "reports": { 
          "href": `/${baseUrl}/reports`,
          "method": "GET"
        },
        
        "init": { 
          "href": `/`,
          "method": "GET"
        },
      }
    }    
  },
   
  navigatorUpdate: (data) => {    
    return {
      ...data,
      "_links": {
        "self": { 
          "href": `/${baseUrl}/${data.id}`,
          "method": "PUT",
        },
        
        "delete": { 
          "href": `/${baseUrl}/${data.id}`,
          "method": "DELETE"
        },
        
        "reports": { 
          "href": `/${baseUrl}/reports`,
          "method": "GET"
        },

        "init": { 
          "href": `/`,
          "method": "GET"
        },       
      }
    }    
  },

  navigatorReport: (data) => {    
    return {
      ...data,
      "_links": {       
        "self": { 
          "href": `/${baseUrl}/reports`,
          "method": "GET"
        },
       
        "init": { 
          "href": `/`,
          "method": "GET"
        },
      }
    }    
  },

  navigatorRemove: (id) => {
    return {
      "_links": {       
        "self": { 
          "href": `/${baseUrl}/${id}`,
          "method": "DELETE"
        },
       
        "init": { 
          "href": `/`,
          "method": "GET"
        },
      }
    }
  }  
});
