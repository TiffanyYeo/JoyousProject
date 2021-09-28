package org.generation.JoyousTeamProject.service;

import org.generation.JoyousTeamProject.repository.ItemRepository;
import org.generation.JoyousTeamProject.repository.entity.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@Service
public class ItemServiceMySQL implements ItemService {

    private final ItemRepository itemRepository;

    public ItemServiceMySQL(@Autowired ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public Productlist save(Productlist item) {
        return this.itemRepository.save(item);
    }

    @Override
    public void delete(int itemId) {
        this.itemRepository.deleteById(itemId);
    }

    @Override
    public List<Productlist> all() {
        List<Productlist> result = new ArrayList<>();
        this.itemRepository.findAll().forEach(result::add);
        return result;
    }

    @Override
    public Productlist findById(int itemId) {
        Optional<Productlist> item = this.itemRepository.findById(itemId);
        Productlist itemResponse = item.get();
        return itemResponse;
    }

}

