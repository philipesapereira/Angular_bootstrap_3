package br.com.philipe.util;

import java.io.Serializable;

public class Retorno<T> implements Serializable{

	private static final long serialVersionUID = -4458346915475139483L;

	private int status;
	
	private T data;

	public Retorno(int status, T data) {
		super();
		this.status = status;
		this.data = data;
	}

	public Retorno(T data) {
		super();
		this.data = data;
	}
	
	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}
	
}