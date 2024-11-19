package resource;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import bo.ProjetoBO;
import model.Projeto;

@Path("/projetos")
public class ProjetoResource {

    private ProjetoBO projetoBO = new ProjetoBO();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
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