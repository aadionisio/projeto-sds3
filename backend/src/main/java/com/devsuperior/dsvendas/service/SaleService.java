package com.devsuperior.dsvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
    @Autowired 
	private SaleRepository repository;
	
    @Autowired 
    private SellerRepository sellerRepository;
    
    //garante que tudo seja resolvido de uma só vez na mesma transacao
    // read only diz que esses processoa abaixo são apenas e leitura
    @Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		// buscando os vendedores para deixar eles em cache.
		// jpa armazena e evita que o sistema faça buscas repetitivas no banco
		
		sellerRepository.findAll();
		
		Page<Sale> result = repository.findAll(pageable);
		// retorna o objeto paginado
		return result.map( x -> new SaleDTO(x));
	}
	
	
}
