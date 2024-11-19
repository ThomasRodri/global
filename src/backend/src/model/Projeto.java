package model;

public class Projeto {
    private int id;
    private String nome;
    private String descricao;

    public Projeto(int id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public boolean isValid() {
        return !nome.isEmpty() && !descricao.isEmpty();
    }

    public String projectSummary() {
        return "Projeto: " + nome + " - " + descricao;
    }
}


public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }