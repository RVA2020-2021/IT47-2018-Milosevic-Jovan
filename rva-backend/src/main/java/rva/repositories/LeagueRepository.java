package rva.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import rva.jpa.League;

import java.util.List;

public interface LeagueRepository extends JpaRepository<League, Integer> {
    List<League> findByNameContainingIgnoreCase(String name);
}
