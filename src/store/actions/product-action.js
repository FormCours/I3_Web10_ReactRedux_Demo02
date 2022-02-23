// Création de constante pour les types d'actions possible
export const PRODUCT_SELECTION = 'product/selection';
//                                  ↑        ↑
//                                  |    Le type d'action
//                                  |
//                                 La categorie

// Création de méthode de générer les objets "Action"
// → Une action est composé d'un type et 
//   potentiellement d'un "payload" (Les données utiles)
export const selectProduct = (id) => ({
    type: PRODUCT_SELECTION,
    payload: id
});