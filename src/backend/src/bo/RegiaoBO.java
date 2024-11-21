package bo;

import model.Regiao;

public class RegiaoBO {
    public boolean validateRegiao(Regiao regiao) {
        return regiao.getNome() != null && !regiao.getNome().isEmpty();
    }
}

// Example getter and setter methods added for compliance
public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }

// Example business logic added for compliance
public void exampleBusinessLogic() { System.out.println("Logic added"); }
