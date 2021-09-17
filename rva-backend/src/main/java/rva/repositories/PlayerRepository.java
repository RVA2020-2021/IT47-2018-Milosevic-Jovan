package rva.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import rva.jpa.Nationality;
import rva.jpa.Player;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Integer> {
    List<Player> findByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(String firstName, String lastName);
    void deleteAllByNationality_Id(Integer id);
    void deleteAllByTeam_Id(Integer id);
    void deleteAllByTeam_IdIn(List<Integer> team_ids);
}
