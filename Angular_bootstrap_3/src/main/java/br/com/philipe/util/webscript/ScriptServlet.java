package br.com.philipe.util.webscript;

import java.io.IOException;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns={"/javascript.js","/css/stylesheet.css"})
public class ScriptServlet extends HttpServlet{

	private static final long serialVersionUID = 3952324178641938092L;

	@EJB
	private ScriptCache scriptCache;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		resp.setCharacterEncoding("UTF-8");
	
		if(req.getRequestURI().endsWith(".css")){
			
			resp.setContentType("text/css");
			resp.getOutputStream().write(scriptCache.getCss(req.getServletContext().getRealPath("")));
			
		}else if(req.getRequestURI().endsWith(".js")){
			
			resp.setContentType("text/javascript");
			resp.getOutputStream().write(scriptCache.getJavascript(req.getServletContext().getRealPath("")));
		}
		
		resp.getOutputStream().flush();
		resp.getOutputStream().close();
		
	}

	
}
