
class Ride {
    private static _activeRides: number = 0;

    static get activeRides() {
        return Ride._activeRides;
    }

    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
}

// compilation error
// Ride.activeRides = 1;

let ride1 = new Ride();
ride1.start();
console.log(Ride.activeRides);

let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);