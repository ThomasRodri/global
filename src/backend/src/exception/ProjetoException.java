package exception;

public class ProjetoException extends Exception {
    public ProjetoException(String message) {
        super(message);
    }
}


public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }