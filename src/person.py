class Person:
    def __init__(self, name, sex, age, weight, height, act):
        self.name = name
        self.sex = sex
        self.age = int(age)
        self.weight = float(weight)
        self.height = float(height)
        self.act = int(act)

    def get_imc(self):
        """Return IMC"""
        return round(self.weight / (self.height ** 2), 2)

    def get_average_imc(self):
        """Return average IMC"""
        return 22 if self.sex == "m" else 20

    def get_title_imc(self):
        """Return IMC classification"""
        if self.age < 10:
            return "Não calculado devido à faixa etária."

        elif 10 <= self.age < 20:
            percentil = {
                "m": {
                    10: [14.42, 15.15, 16.72, 19.60, 22.60],
                    11: [14.83, 15.59, 17.28, 20.35, 23.70],
                    12: [15.24, 16.06, 17.87, 21.12, 24.89],
                    13: [15.73, 16.62, 18.53, 21.93, 25.93],
                    14: [16.18, 17.20, 19.22, 22.77, 26.93],
                    15: [16.59, 17.76, 19.92, 23.63, 27.76],
                    16: [17.01, 18.32, 20.63, 24.45, 28.53],
                    17: [17.31, 18.68, 21.12, 25.28, 29.32],
                    18: [17.54, 18.89, 21.45, 25.95, 30.02],
                    19: [17.80, 19.20, 21.86, 26.63, 30.66]
                },
                "f": {
                    10: [14.23, 15.09, 17.00, 20.19, 23.20],
                    11: [14.60, 15.53, 17.67, 21.18, 24.59],
                    12: [14.98, 15.98, 18.35, 22.17, 25.95],
                    13: [15.36, 16.43, 18.95, 23.08, 27.07],
                    14: [15.67, 16.79, 19.32, 23.88, 27.97],
                    15: [16.01, 17.16, 19.69, 24.29, 28.51],
                    16: [16.37, 17.54, 20.09, 24.74, 29.10],
                    17: [16.59, 17.81, 20.36, 25.23, 29.72],
                    18: [16.71, 17.99, 20.57, 25.56, 30.22],
                    19: [16.87, 18.20, 20.80, 25.85, 30.72]
                }
            }
            if self.get_imc() < percentil[self.sex][self.age][0]:
                return "Percentil < 5: Baixo Peso"
            elif percentil[self.sex][self.age][0] <= self.get_imc() < percentil[self.sex][self.age][1]:
                return "Percentil entre 5 e 15: Eutrofia"
            elif percentil[self.sex][self.age][1] <= self.get_imc() < percentil[self.sex][self.age][2]:
                return "Percentil entre 15 e 50: Eutrofia"
            elif percentil[self.sex][self.age][2] <= self.get_imc() < percentil[self.sex][self.age][3]:
                return "Percentil entre 50 e 85: Eutrofia"
            elif percentil[self.sex][self.age][3] <= self.get_imc() < percentil[self.sex][self.age][4]:
                return "Percentil entre 85 e 95: Sobrepeso"
            else:
                return "Percentil acima de 95: Obesidade"

        elif 20 <= self.age < 65:
            if self.get_imc() < 16:
                return "Magreza Grau III"
            elif 16.0 <= self.get_imc() < 17:
                return "Magreza Grau II"
            elif 17.0 <= self.get_imc() < 18.5:
                return "Magreza Grau I"
            elif 18.5 <= self.get_imc() < 25:
                return "Eutrofia"
            elif 25.0 <= self.get_imc() < 30:
                return "Sobrepeso"
            elif 30.0 <= self.get_imc() < 35:
                return "Obesidade Grau I"
            elif 35.0 <= self.get_imc() < 40:
                return "Obesidade Grau II"
            else:
                return "Obesidade Grau III"

        elif self.age >= 65:
            if self.get_imc() < 23:
                return "Baixo Peso"
            elif 23 <= self.get_imc() < 28:
                return "Eutrofia"
            elif 28 <= self.get_imc() < 30:
                return "Sobrepeso"
            else:
                return "Obesidade"

    def get_theorical_weight(self):
        """Return theorical weight"""
        return round(self.get_average_imc() * (self.height ** 2), 2)

    def get_tmb(self) -> float:
        """Return TMB"""
        if self.sex == "m":
            if self.age < 3:
                return round(59.512 * self.weight - 30.4)
            elif 3 <= self.age < 10:
                return round(22.706 * self.weight + 504.3)
            elif 10 <= self.age < 18:
                return round(17.686 * self.weight + 658.2)
            elif 18 <= self.age < 30:
                return round(15.057 * self.weight + 692.2)
            elif 30 <= self.age < 60:
                return round(11.472 * self.weight + 873.1)
            else:
                return round(11.711 * self.weight + 587.7)
        elif self.sex == "f":
            if self.age < 3:
                return round(58.317 * self.weight - 31.1)
            elif 3 <= self.age < 10:
                return round(20.317 * self.weight + 485.9)
            elif 10 <= self.age < 18:
                return round(13.384 * self.weight + 692.6)
            elif 18 <= self.age < 30:
                return round(14.818 * self.weight + 486.6)
            elif 30 <= self.age < 60:
                return round(8.126 * self.weight + 845.6)
            else:
                return round(9.082 * self.weight + 658.5)

    def get_vet(self):
        """Return VET"""
        if 19 <= self.age < 60:
            if self.act == 0 or self.act == 1:
                return round(self.get_tmb() * 1.53)
            elif self.act == 2:
                return round(self.get_tmb() * 1.76)
            else:
                return round(self.get_tmb() * 2.25)
        else:
            return "Não calculado devido à faixa etária."

    def get_gte(self):
        """Return GTE"""
        if 9 <= self.age < 18:
            if self.sex == "m":
                if self.act == 0:
                    return round(88.5 - 61.9 * self.age + 1.00 * (26.7 * self.weight + 903 * self.height) + 25)
                elif self.act == 1:
                    return round(88.5 - 61.9 * self.age + 1.13 * (26.7 * self.weight + 903 * self.height) + 25)
                elif self.act == 2:
                    return round(88.5 - 61.9 * self.age + 1.26 * (26.7 * self.weight + 903 * self.height) + 25)
                elif self.act == 3:
                    return round(88.5 - 61.9 * self.age + 1.42 * (26.7 * self.weight + 903 * self.height) + 25)
            elif self.sex == "f":
                if self.act == 0:
                    return round(135.3 - 30.8 * self.age + 1.00 * (10 * self.weight + 934 * self.height) + 20)
                elif self.act == 1:
                    return round(135.3 - 30.8 * self.age + 1.16 * (10 * self.weight + 934 * self.height) + 20)
                elif self.act == 2:
                    return round(135.3 - 30.8 * self.age + 1.31 * (10 * self.weight + 934 * self.height) + 20)
                elif self.act == 3:
                    return round(135.3 - 30.8 * self.age + 1.56 * (10 * self.weight + 934 * self.height) + 20)
        elif self.age >= 18:
            if self.sex == "m":
                if self.act == 0:
                    return round(662 - 9.53 * self.age + 1.00 * (15.91 * self.weight + 539.6 * self.height))
                elif self.act == 1:
                    return round(662 - 9.53 * self.age + 1.11 * (15.91 * self.weight + 539.6 * self.height))
                elif self.act == 2:
                    return round(662 - 9.53 * self.age + 1.25 * (15.91 * self.weight + 539.6 * self.height))
                elif self.act == 3:
                    return round(662 - 9.53 * self.age + 1.48 * (15.91 * self.weight + 539.6 * self.height))
            elif self.sex == "f":
                if self.act == 0:
                    return round(354 - 6.91 * self.age + 1.00 * (9.35 * self.weight + 726 * self.height))
                elif self.act == 1:
                    return round(354 - 6.91 * self.age + 1.12 * (9.35 * self.weight + 726 * self.height))
                elif self.act == 2:
                    return round(354 - 6.91 * self.age + 1.27 * (9.35 * self.weight + 726 * self.height))
                elif self.act == 3:
                    return round(354 - 6.91 * self.age + 1.45 * (9.35 * self.weight + 726 * self.height))
        else:
            return "Não calculado devido à faixa etária."
