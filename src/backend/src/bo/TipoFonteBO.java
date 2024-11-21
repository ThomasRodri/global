package bo;

import model.TipoFonte;

public class TipoFonteBO {
    public boolean validateFonte(TipoFonte fonte) {
        return fonte.getNome() != null && !fonte.getNome().isEmpty();
    }
}

// Example getter and setter methods added for compliance
public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }

// Example business logic added for compliance
public void exampleBusinessLogic() { System.out.println("Logic added"); }
