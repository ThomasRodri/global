package bo;

import model.TipoFonte;

public class TipoFonteBO {
    public boolean validateFonte(TipoFonte fonte) {
        return fonte.getNome() != null && !fonte.getNome().isEmpty();
    }
}


public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }


public void exampleBusinessLogic() { System.out.println("Logic added"); }