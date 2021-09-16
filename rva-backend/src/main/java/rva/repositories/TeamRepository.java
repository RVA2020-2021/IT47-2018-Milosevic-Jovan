package rva.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import rva.jpa.Team;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Integer> {
    List<Team> findByNameContainingIgnoreCase(String name);
    void deleteAllByLeague_Id(Integer id);
    List<Team> findAllByLeague_Id(Integer id);
}
