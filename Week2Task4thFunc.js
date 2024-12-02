// Fourth Task Function

function formatFullname (Firstname, Lastname) {
    const capitallize = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const formattedFirstName = capitallize(Firstname);
    const formattedLastName = capitallize(Lastname);
    console.log(`${formattedFirstName} ${formattedLastName}`);
}
formatFullname("Ethan", "Huynh")