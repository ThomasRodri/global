<<<<<<< HEAD

=======
>>>>>>> cd5b0510def672895ca75b2664256955da38bff1
package resource;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import bo.ProjetoBO;
import model.Projeto;

<<<<<<< HEAD
@Path("/api/projetos") // Adjusted to ensure compatibility with expected endpoint
=======
@Path("/projetos")
>>>>>>> cd5b0510def672895ca75b2664256955da38bff1
public class ProjetoResource {

    private ProjetoBO projetoBO = new ProjetoBO();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
<<<<<<< HEAD
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
=======
    public Response createProjeto(Projeto projeto) {
        if (projetoBO.validateProjeto(projeto)) {
            return Response.status(Response.Status.CREATED).entity("Projeto criado!").build();
        } else {
            return Response.status(Response.Status.BAD_REQUEST).entity("Dados inválidos!").build();
        }
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProjeto(@PathParam("id") int id) {
        
        return Response.status(Response.Status.OK).entity("Projeto encontrado!").build();
    }

    
}


public String exampleGetter() { return "Example"; }
public void exampleSetter(String value) { }
>>>>>>> cd5b0510def672895ca75b2664256955da38bff1
