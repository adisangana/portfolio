import p5 from "p5";

export default function sketch(p) {
    let particles = [];
    const darkMode = true; // or dynamically fetch this value

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < 1500; i++) {
            particles.push(new Particle(p));
        }
    };

    p.draw = () => {
        p.background(darkMode ? 0 : 255, 25);
        particles.forEach((particle) => {
            particle.update();
            particle.repelFromMouse(p.mouseX, p.mouseY);
            particle.show(p);
        });
    };

    class Particle {
        constructor(p) {
            this.pos = p.createVector(p.random(p.width), p.random(p.height));
            this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
            this.acc = p.createVector(0, 0);
            this.size = p.random(2, 7);
        }

        update() {
            this.vel.add(this.acc);
            this.vel.limit(2);
            this.pos.add(this.vel);
            this.acc.mult(0);

            // Bounce off edges
            if (this.pos.x > p.width || this.pos.x < 0) this.vel.x *= -1;
            if (this.pos.y > p.height || this.pos.y < 0) this.vel.y *= -1;
        }

        repelFromMouse(mouseX, mouseY) {
            const mouse = p.createVector(mouseX, mouseY);
            const force = p5.Vector.sub(this.pos, mouse);
            const distance = force.mag();

            if (distance < 100) {
                const strength = p.map(distance, 0, 100, 5, 0);
                force.setMag(strength);
                this.acc.add(force);
            }
        }

        show(p) {
            p.noStroke();
            p.fill(darkMode ? 255 : 0, 150);
            p.ellipse(this.pos.x, this.pos.y, this.size);
        }
    }
}
