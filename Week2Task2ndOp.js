//Second Task Operators
const AssignmentOperatos = (a, b) => {
    console.log("Initial values: a =", a, ", b =", b);

    a += b;
    console.log("a += b, a =", a);

    a *= b;
    console.log("a *= b, a =", a);

    a %= b;
    console.log("a %= b, a =", a);
};

AssignmentOperatos(30, 20);