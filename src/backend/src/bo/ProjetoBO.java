package bo;

import model.Projeto;

public class ProjetoBO {
    public boolean validateProjeto(Projeto projeto) {
        return projeto.isValid();
    }

    public String generateSummary(Projeto projeto) {
        return projeto.projectSummary();
    }
}


public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }


public void exampleBusinessLogic() { System.out.println("Logic added"); }