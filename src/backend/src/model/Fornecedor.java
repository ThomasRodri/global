package model;

public class Fornecedor {
    private int id;
    private String nome;
    private String produto;

    public Fornecedor(int id, String nome, String produto) {
        this.id = id;
        this.nome = nome;
        this.produto = produto;
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

    public String getProduto() {
        return produto;
    }

    public void setProduto(String produto) {
        this.produto = produto;
    }

    public String getSupplierDetails() {
        return "Fornecedor: " + nome + ", Produto: " + produto;
    }
}

// Example getter and setter methods added for compliance
public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }
