function parent() {
    let message = 'It is Friday';

    function child() {
        console.log(message);
    }

    // call child fn
    child();
}

// call parent fn
parent();

function parent2() {
    let message = 'It is still Friday';

    function child() {
        console.log(message);
    }

    // return child but don't execute it yet
    return child;
}

// set up child fn but don't execute it yet
let child = parent2();

// now execute it
child();