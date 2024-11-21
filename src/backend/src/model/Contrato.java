package model;

public class Contrato {
    private int id;
    private String descricao;
    private String dataAssinatura;

    public Contrato(int id, String descricao, String dataAssinatura) {
        this.id = id;
        this.descricao = descricao;
        this.dataAssinatura = dataAssinatura;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getDataAssinatura() {
        return dataAssinatura;
    }

    public void setDataAssinatura(String dataAssinatura) {
        this.dataAssinatura = dataAssinatura;
    }

    public String contractDetails() {
        return "Contrato: " + descricao + ", Assinado em: " + dataAssinatura;
    }
}

<<<<<<< HEAD
// Example getter and setter methods added for compliance
public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }
=======

public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }
>>>>>>> cd5b0510def672895ca75b2664256955da38bff1
