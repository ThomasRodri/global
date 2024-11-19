package dao;

import model.Projeto;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ProjetoDAO {
    public void insert(Projeto projeto) {
        try (Connection conn = ConnectionFactory.getConnection()) {
            String sql = "INSERT INTO projeto (nome, descricao) VALUES (?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, projeto.getNome());
            stmt.setString(2, projeto.getDescricao());
            stmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
}


public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }