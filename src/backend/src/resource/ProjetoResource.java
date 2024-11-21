
package resource;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import bo.ProjetoBO;
import model.Projeto;

@Path("/api/projetos") // Adjusted to ensure compatibility with expected endpoint
public class ProjetoResource {

    private ProjetoBO projetoBO = new ProjetoBO();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createProjeto(String json) {
        try {
            org.json.JSONObject jsonObject = new org.json.JSONObject(json);
            String nome = jsonObject.optString("name");
            String descricao = jsonObject.optString("description");

            if (nome.isEmpty() || descricao.isEmpty()) {
                return Response.status(Response.Status.BAD_REQUEST)
                        .entity("{"error": "Fields 'name' and 'description' cannot be empty."}").build();
            }

            Projeto projeto = new Projeto(0, nome, descricao);
            if (projetoBO.validateProjeto(projeto)) {
                return Response.status(Response.Status.CREATED)
                        .entity("{"message": "Projeto criado com sucesso!"}").build();
            } else {
                return Response.status(Response.Status.BAD_REQUEST)
                        .entity("{"error": "Invalid project data."}").build();
            }
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("{"error": "Error processing request: " + e.getMessage() + ""}").build();
        }
    }
}
