class Vechiles {
    ID;
    vechileName;
    companyName;
    isPlane;
}
class Cars extends Vechiles {
    fuel;
    isPlane = false;
}
class Planes extends Vechiles {
    airCraftType;
    isPlane = true;
}

// method increment id every new object
class Employee {
    ID;
    dateOfBirth;
}
class Driver extends Employee {
    licenseID;
}
class Pilot extends Employee {
    licenseID;
}

class Reservation {
    reservationID;
    vechileID;
    employeeId;
    reservationDate;
}




let Car1 = new Cars();
Car1.ID = 1111;
Car1.vechileName = "Corola";
Car1.companyName = "Toyta";
Car1.fuel = "Gas";

let Car2 = new Cars();
Car1.ID = 2222;
Car1.vechileName = "Camry";
Car1.companyName = "Toyta";
Car1.fuel = "Gas";

let Car3 = new Cars();
Car1.ID = 3333;
Car1.vechileName = "GTR";
Car1.companyName = "Toyta";
Car1.fuel = "Gas";



let Plane1 = new Planes();
Plane1.ID = 1212;
Plane1.airCraftType = "war plane";
Plane1.companyName = "gg";
Plane1.vechileName = "f-16";
let Plane2 = new Planes();
Plane2.ID = 2323;
Plane2.airCraftType = "war plane";
Plane2.companyName = "gg";
Plane2.vechileName = "f-16";




let Driver1 = new Driver();
Driver1.ID = 1109353290;
Driver1.dateOfBirth = "2000/1/1";
Driver1.licenseID = 11;

let Pilot1 = new Pilot();
Pilot1.ID = 1100000000;
Pilot1.dateOfBirth = "2000/1/1";
Pilot1.licenseID = 22;





let validation = (employeeId, vechileID) => {
    if (
        (employeeId == Pilot1.ID && vechileID == Plane1.ID) ||
        vechileID == Plane2.ID
    ) {
        let reserved1 = new Reservation();
        reserved1.reservationID = 1;
        reserved1.vechileID = vechileID;
        reserved1.employeeId = employeeId;
        reserved1.reservationDate = new Date();

        arr = [
            reserved1.reservationID,
            reserved1.vechileID,
            reserved1.employeeId,
            reserved1.reservationDate,
        ];
        const array = arr.map((currentValue) => {
            return currentValue;
        });
        console.log(array);
    } else {
        console.log("not Organizer");
    }
};

validation(1100000000, 2323);
