package org.generation.JoyousTeamProject.repository.entity;

import org.generation.JoyousTeamProject.controller.dto.ItemDTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String imageURL;
    private String category;
    private double price;

    public Item() {}

    public Item( ItemDTO itemDto ) {

        this.name = itemDto.getName();
        this.description = itemDto.getDescription();
        this.imageURL = itemDto.getImageURL();
        this.category = itemDto.getCategory();
        this.price = itemDto.getPrice();
    }

    public Integer getId() { return id; }

    public void setId( Integer id ) { this.id = id; }

    public String getName() { return name; }

    public void setName( String name ) { this.name = name; }

    public String getDescription() { return description; }

    public void setDescription( String description ) { this.description = description; }

    public String getImageURL() { return "/src/main/resources/static/images/FloralArrangement/" + imageURL; }

    public void setImageURL( String imageURL ) { this.imageURL = imageURL; }

    public String getCategory() { return category; }

    public void setCategory( String category ) { this.category = category; }

    public double getPrice() { return price; }

    public void setPrice( double price ) { this.price = price; }

    @Override
    public String toString() {
        return "Item{" + "id=" + id + ", name='" + name + '\'' + ", description='" + description + '\'' + ", imageURL='" + imageURL + '\'' + ", category='" + category + '\'' + ", price='" + price + '}';
    }

}
