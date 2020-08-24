
/**
 * BuilderDemo
 */
abstract class Vehicle {
    int num_of_wheels;
    int max_passengers;
    String fuel_type;

    abstract int wheels();

    abstract int passengers();

    abstract String fuel_name();
}

class Car extends Vehicle {
    int wheels() {
        return num_of_wheels = 4;

    }

    int passengers() {
        return max_passengers = 5;
    }

    String fuel_name() {
        return fuel_type = "CNG/Gasoline";
    }

    int has_doors = 4;
}

class Plane extends Vehicle {
    int wheels() {
        return num_of_wheels = 10;
    }

    int passengers() {
        return max_passengers = 50;
    }

    String fuel_name() {
        return fuel_type = "Jet Fuel";
    }

    Boolean hasWings = true;
}

public class BuilderDemo {
    
    public static void main(String[] args) {
  Car c=new Car();
            System.out.println("Type of vehicle: Car,");
          
            System.out.println("Car has: " + c.wheels() + "wheels ,can carry upto " + c.passengers() + " Passengers,uses "
                    + c.fuel_name() + " as fuel and has" + c.has_doors + " doors");
        
       Plane p = new Plane();
            System.out.println("Type of Vehicle: Plane");
           
           
            System.out.println("Plane has: "+ p.wheels() + "wheels ,can carry upto " + p.passengers() + " Passengers,uses "
            + p.fuel_name() + " as fuel and it is " +p.hasWings +" that it has wings!!");
        
    }

}
