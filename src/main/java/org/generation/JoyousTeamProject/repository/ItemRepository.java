package org.generation.JoyousTeamProject.repository;

import org.springframework.data.repository.CrudRepository;
import org.generation.JoyousTeamProject.repository.entity.*;

public interface ItemRepository extends CrudRepository<Productlist, Integer> {

}

//Item repository extends the CRUD repository class and it is able to access the
// methods that are available in the CRUD repository class
