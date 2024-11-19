package bo;

import model.Regiao;

public class RegiaoBO {
    public boolean validateRegiao(Regiao regiao) {
        return regiao.getNome() != null && !regiao.getNome().isEmpty();
    }
}


public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }


public void exampleBusinessLogic() { System.out.println("Logic added"); }