package br.com.philipe.util.webscript;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.StringWriter;
import java.nio.file.Files;

import javax.ejb.Singleton;

import com.yahoo.platform.yui.compressor.CssCompressor;
import com.yahoo.platform.yui.compressor.JavaScriptCompressor;

@Singleton
public class ScriptCache {

	private byte[] javascript;
	
	private byte[] css;
	
	public byte[] getJavascript(String rootPath) throws IOException{
		
		this.loadJavascript(rootPath);
		
		return this.javascript;
	}
	
	public byte[] getCss(String rootPath) throws IOException{
		
		this.loadCss(rootPath);
		return this.css;
	}
	
	private void loadJavascript(String rootPath) throws IOException{
		
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

		String[] libs = {
			"/lib/jquery-3.2.1.min.js"
//			,"/lib/prefixfree.min.js"
			,"/lib/angular-1.6.6.min.js"
			,"/lib/ui-router-1.0.11.min.js"
			,"/lib/ui-bootstrap-tpls-2.5.0.min.js"
		};
		
		for(String script : libs){
			
			outputStream.write(Files.readAllBytes(new File(rootPath + script).toPath()));
		}
		
		String[] scripts = {
			"/app/prototype.js"
			,"/app/constantes.js"
			,"/app/app.js"
			,"/app/factory/processing.js"
			,"/app/factory/asyncWs.js"
			,"/app/directive/menu/menuSgr.js"
			,"/app/directive/tituloFuncionalidade/tituloFuncionalidade.js"
			,"/app/directive/pageFilter/pageFilter.js"
			,"/app/directive/pagination/pagination.js"
			,"/app/directive/formGroup/formGroup.js"
			,"/app/directive/formGroupDateRange/formGroupDateRange.js"
			,"/app/directive/picklist/picklistMensagem.js"
			,"/modules/main/config.js"
			,"/modules/main/home/homeCtrl.js"
		};
		
		Reader reader;
		StringWriter writer;
		
		for(String script : scripts){
			
			reader = new InputStreamReader(new FileInputStream(rootPath + script));
			
			writer = new StringWriter();
			
			new JavaScriptCompressor(reader, null).compress(writer,-1, true,false,false,false);
			
			outputStream.write(writer.toString().getBytes("UTF-8"));
			
			reader.close();
			writer.close();
		}
		
		this.javascript = outputStream.toByteArray();
	}
	
	private void loadCss(String rootPath) throws IOException{
		String[] scripts = {
		"/css/bootstrap.3.3.7.css"
		,"/css/custom.css"
		,"/css/custom-bootstrap.css"
		};
		
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		Reader reader;
		StringWriter writer;
		
		for(String script : scripts){
			
			reader = new InputStreamReader(new FileInputStream(rootPath + script));
			writer = new StringWriter();
			
			new CssCompressor(reader).compress(writer,-1);;
			
			outputStream.write(writer.toString().getBytes("UTF-8"));
			
			reader.close();
			writer.close();
		}
		
		this.css = outputStream.toByteArray();
	}
	
}