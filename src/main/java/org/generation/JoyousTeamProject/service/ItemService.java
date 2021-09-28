package org.generation.JoyousTeamProject.service;

import org.generation.JoyousTeamProject.repository.entity.*;
import java.util.*;

public interface ItemService {

    Productlist save(Productlist item);

    void delete(int itemID);

    List<Productlist> all();

    Productlist findById(int itemId);

}
