package org.generation.JoyousTeamProject.service;

import org.generation.JoyousTeamProject.repository.entity.*;
import java.util.*;

public interface ItemService {

    Item save(Item item);

    void delete(int itemID);

    List<Item> all();

    Item findById(int itemId);

}
