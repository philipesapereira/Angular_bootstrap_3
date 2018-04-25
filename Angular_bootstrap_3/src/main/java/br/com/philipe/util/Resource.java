package br.com.philipe.util;

import java.io.Serializable;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;


public abstract class Resource implements Serializable{
	
	private static final long serialVersionUID = -1520292277606028339L;

	@Context protected HttpSession session;
	@Context protected HttpServletResponse servletResponse;
	
	public static Response build(Status status, Object object) {
		
		return Response.status(status)
				.entity(object)
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Credentials", "true")
				.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")
				.build();
	}

}