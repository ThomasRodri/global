package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
    public static Connection getConnection() throws SQLException {
<<<<<<< HEAD
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/seu_banco", "usuario", "senha");
    }
}

// Example getter and setter methods added for compliance
public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }
=======
        return DriverManager.getConnection("jdbc:mysql:
    }
}


public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }
>>>>>>> cd5b0510def672895ca75b2664256955da38bff1
