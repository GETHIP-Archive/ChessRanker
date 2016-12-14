import java.util.Scanner;
import java.util.ArrayList;
/**
 * Write a description of class ranker here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class ranker
{
    public static void main (String [] args)
    {
        Scanner scan = new Scanner (System.in);
        Scanner scan2 = new Scanner (System.in);
        ArrayList <String> names = new ArrayList <String> ();
        names.add("sid");
        names.add("jack");
        names.add("noob");
        names.add("pro");
        names.add("nick");
        
        ArrayList <Integer> scores = new ArrayList <Integer> ();
        scores.add(1500);
        scores.add(1200);
        scores.add(300);
        scores.add(2000);
        scores.add(100);
        
        System.out.println("name the players. Make sure that the greater score comes first");
        System.out.println("Player 1:");
        String player1 = scan.nextLine();
        System.out.println("Player 2:");
        String player2 = scan.nextLine();
        
        int Nameplace1 = names.indexOf(player1);
        int Nameplace2 = names.indexOf(player2);
        
        int score1 = scores.get(Nameplace1);
        int score2 = scores.get(Nameplace2);
        System.out.println("is it a tie game");
        String tie = scan.nextLine();
        
        if (tie.equalsIgnoreCase("y"))
        {
            
            
            if (score1 - score2 >= 0 && score1 - score2 <= 11)
            {
                System.out.println(player1 + ": " + score1);
                System.out.println(player2 + ": " + score2);
            }
            if (score1 - score2 >= 12 && score1 - score2 <= 33)
            {
                System.out.println(player1 + ": " + (score1 - 1));
                System.out.println(player2 + ": " + (score2 + 1));
            }
            if (score1 - score2 >= 34 && score1 - score2 <= 55)
            {
                System.out.println(player1 + ": " + (score1 - 2));
                System.out.println(player2 + ": " + (score2 + 2));
            }
            if (score1 - score2 >=56 && score1 - score2 <= 77)
            {
                System.out.println(player1 + ": " + (score1 - 3));
                System.out.println(player2 + ": " + (score2 +3));
            }
            if (score1 - score2 >= 78 && score1 - score2 <= 100)
            {
                System.out.println(player1 + ": " + (score1 - 4));
                System.out.println(player2 + ": " + (score2 + 4));
            }
            if (score1 - score2 >= 101 && score1 - score2 <= 125)
            {
                System.out.println(player1 + ": " + (score1 - 5));
                System.out.println(player2 + ": " + (score2 + 5));
            }
            if (score1 - score2 >= 126 && score1 - score2 <= 150)
            {
                System.out.println(player1 + ": " + (score1 - 6));
                System.out.println(player2 + ": " + (score2 + 6));
            }
            if (score1 - score2 >= 151 && score1 - score2 <= 176)
            {
                System.out.println(player1 + ": " + (score1 - 7));
                System.out.println(player2 + ": " +( score2 +7 ));
            }
            if (score1 - score2 >= 177 && score1 - score2 <= 205)
            {
                System.out.println(player1 + ": " + (score1 -8 ));
                System.out.println(player2 + ": " + (score2 + 8));
            }
            if (score1 - score2 >= 206 && score1 - score2 <= 238)
            {
                System.out.println(player1 + ": " + (score1 - 9));
                System.out.println(player2 + ": " + (score2 + 9));
            }
            if (score1 - score2 >= 239 && score1 - score2 <= 272)
            {
                System.out.println(player1 + ": " + (score1 - 10));
                System.out.println(player2 + ": " + (score2 + 10));
            }
            if (score1 - score2 >=273 && score1 - score2 <= 314)
            {
                System.out.println(player1 + ": " + (score1 - 11));
                System.out.println(player2 + ": " + (score2 + 11));
            }
            if (score1 - score2 >= 315)
            {
                System.out.println(player1 + ": " + (score1 -12));
                System.out.println(player2 + ": " + (score2 + 12));
            }
        }
        
        if (tie.equalsIgnoreCase("n"))
        {
            System.out.println("Indicate who one. player 1 (p1) or player 2(p2)");
            String choice2 = scan2.nextLine();
            if (choice2.equalsIgnoreCase("p1"))
            {
                if (score1 - score2 >= 0 && score1 - score2 <= 11)
                {
                    System.out.println(player1 + ": " + (score1 + 16));
                    System.out.println(player2 + ": " + (score2 - 16));
                }
                if (score1 - score2 >= 12 && score1 - score2 <= 33)
                {
                    System.out.println(player1 + ": " + (score1 + 15));
                    System.out.println(player2 + ": " + (score2 - 15));
                }
                if (score1 - score2 >= 34 && score1 - score2 <= 55)
                {
                    System.out.println(player1 + ": " + (score1 + 14));
                    System.out.println(player2 + ": " + (score2 - 14));
                }
                if (score1 - score2 >=56 && score1 - score2 <= 77)
                {
                    System.out.println(player1 + ": " + (score1 + 13));
                    System.out.println(player2 + ": " + (score2 - 13));
                }
                if (score1 - score2 >= 78 && score1 - score2 <= 100)
                {
                    System.out.println(player1 + ": " + (score1 + 12));
                    System.out.println(player2 + ": " + (score2 - 12));
                }
                if (score1 - score2 >= 101 && score1 - score2 <= 125)
                {
                    System.out.println(player1 + ": " + (score1 + 11));
                    System.out.println(player2 + ": " + (score2 - 11));
                }
                if (score1 - score2 >= 126 && score1 - score2 <= 150)
                {
                    System.out.println(player1 + ": " + (score1 + 10));
                    System.out.println(player2 + ": " + (score2 - 10));
                }
                if (score1 - score2 >= 151 && score1 - score2 <= 176)
                {
                    System.out.println(player1 + ": " + (score1 + 9));
                    System.out.println(player2 + ": " +( score2 - 9 ));
                }
                if (score1 - score2 >= 177 && score1 - score2 <= 205)
                {
                    System.out.println(player1 + ": " + (score1 + 8 ));
                    System.out.println(player2 + ": " + (score2 - 8));
                }
                if (score1 - score2 >= 206 && score1 - score2 <= 238)
                {
                    System.out.println(player1 + ": " + (score1 + 7));
                    System.out.println(player2 + ": " + (score2 - 7));
                }
                if (score1 - score2 >= 239 && score1 - score2 <= 272)
                {
                    System.out.println(player1 + ": " + (score1 + 6));
                    System.out.println(player2 + ": " + (score2 - 6));
                }
                if (score1 - score2 >=273 && score1 - score2 <= 314)
                {
                    System.out.println(player1 + ": " + (score1 + 5));
                    System.out.println(player2 + ": " + (score2 - 5));
                }
                if (score1 - score2 >= 315)
                {
                    System.out.println(player1 + ": " + (score1 + 4));
                    System.out.println(player2 + ": " + (score2 - 4));
                }
            }
            if (choice2.equalsIgnoreCase("p2"))
            {
                if (score1 - score2 >= 0 && score1 - score2 <= 11)
                {
                    System.out.println(player1 + ": " + (score1 - 16));
                    System.out.println(player2 + ": " + (score2 + 16));
                }
                if (score1 - score2 >= 12 && score1 - score2 <= 33)
                {
                    System.out.println(player1 + ": " + (score1 - 17));
                    System.out.println(player2 + ": " + (score2 + 17));
                }
                if (score1 - score2 >= 34 && score1 - score2 <= 55)
                {
                    System.out.println(player1 + ": " + (score1 - 18));
                    System.out.println(player2 + ": " + (score2 + 18));
                }
                if (score1 - score2 >=56 && score1 - score2 <= 77)
                {
                    System.out.println(player1 + ": " + (score1 - 19));
                    System.out.println(player2 + ": " + (score2 + 19));
                }
                if (score1 - score2 >= 78 && score1 - score2 <= 100)
                {
                    System.out.println(player1 + ": " + (score1 - 20));
                    System.out.println(player2 + ": " + (score2 + 20));
                }
                if (score1 - score2 >= 101 && score1 - score2 <= 125)
                {
                    System.out.println(player1 + ": " + (score1 - 21));
                    System.out.println(player2 + ": " + (score2 + 21));
                }
                if (score1 - score2 >= 126 && score1 - score2 <= 150)
                {
                    System.out.println(player1 + ": " + (score1 - 22));
                    System.out.println(player2 + ": " + (score2 + 22));
                }
                if (score1 - score2 >= 151 && score1 - score2 <= 176)
                {
                    System.out.println(player1 + ": " + (score1 - 23));
                    System.out.println(player2 + ": " + (score2 + 23));
                }
                if (score1 - score2 >= 177 && score1 - score2 <= 205)
                {
                    System.out.println(player1 + ": " + (score1 - 24));
                    System.out.println(player2 + ": " + (score2 + 24));
                }
                if (score1 - score2 >= 206 && score1 - score2 <= 238)
                {
                    System.out.println(player1 + ": " + (score1 - 25));
                    System.out.println(player2 + ": " + (score2 + 25));
                }
                if (score1 - score2 >= 239 && score1 - score2 <= 272)
                {
                    System.out.println(player1 + ": " + (score1 - 26));
                    System.out.println(player2 + ": " + (score2 + 26));
                }
                if (score1 - score2 >=273 && score1 - score2 <= 314)
                {
                    System.out.println(player1 + ": " + (score1 - 27));
                    System.out.println(player2 + ": " + (score2 + 27));
                }
                if (score1 - score2 >= 315)
                {
                    System.out.println(player1 + ": " + (score1 - 28));
                    System.out.println(player2 + ": " + (score2 + 28));
                }
            }
        }
        
    }
}
