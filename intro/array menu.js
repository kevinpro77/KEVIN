const vec = [10, 7, 2, 5, 3, 1, 9, 4]
for (let i = 0; i < vec.length; i++) {
    vec[i] = parseInt(vec[i]);
    console.log(typeof(vec[i]))
}

if (num)
    console.log(vec.sort())

do {
    console.log('la lista esta asi:', menu)
    console.log('menu para array: \n1.agregar producto\n2.eliminar producto\n3.ordenar \n4.sobreescribir \n5.buscar \n6.salir')
    var opcion = Math.round(Math.random() * (6 - 1) + 1)
    console.log('la opcion elegida es: ', opcion)
    var element = Math.round(Math.random() * (100 + 100) - 100)
    switch (opcion) {
        case 1:
            menu.push(element);
            console.log('elemento a adicionar es: ', element)
            console.log(menu);
            break;

        case 2:
            if (menu.length <= 0) {
                console.log('no hay elementos para eliminar')

            } else {
                console.log('el elemento a eliminar es: ', menu[menu.length - 1]);
                menu.pop();
                console.log(menu);
            }

            break;
        case 3:
            /// menu = menu.sort();
            menu.sort()
            console.log(menu);
            break;
        case 4:
            let posicion = Math.round(Math.random() * menu.length - 1);
            console.log('el elemento a reemplazar es: ', menu[posicion], ', por el elemento: ', element)
            menu.splice(posicion, 1, element)
            console.log();
            break;
        case 5:
            console.log('el elemento a buscar es: ', element)
            console.log('la posicion del elemento es: ', menu.indexOf(element))
            break;

        default:
            console.log('se acabo el programa')


    }
} while (opcion != 6);