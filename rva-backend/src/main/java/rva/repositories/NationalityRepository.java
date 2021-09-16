package rva.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import rva.jpa.Nationality;

import java.util.List;

public interface NationalityRepository extends JpaRepository<Nationality, Integer> {
    List<Nationality> findByNameContainingIgnoreCase(String name);
}
