package br.com.philipe.ws.seguranca;

import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import br.com.philipe.util.Resource;
import br.com.philipe.util.Retorno;

@Path("/seguranca")
@Stateless
@Consumes({ MediaType.APPLICATION_JSON })
@Produces(MediaType.APPLICATION_JSON + "; charset=utf-8")
public class SisgrWS extends Resource {

	private static final long serialVersionUID = -1043803519111761012L;

	@GET
	@Path("/processosAutorizados")
	public Response processosAutorizados() {
		
		try {
			
			return build(Status.OK, new Retorno<String>("teste")); 

//		} catch (SitrfException e) {
//			retorno.setCodErro(e.getCodigo().toString());
//			retorno.setMsg(e.getMessage());
		} catch (Exception e) {
			return build(Status.UNAUTHORIZED, null);
		}
		
		
	}


}