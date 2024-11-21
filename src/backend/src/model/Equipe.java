package model;

public class Equipe {
    private int id;
    private String nome;

    public Equipe(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String teamDetails() {
        return "Equipe: " + nome;
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
